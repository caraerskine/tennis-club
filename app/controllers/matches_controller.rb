class MatchesController < ApplicationController

    def create        
            @match = @current_user.matches.new({
              datetime: match_params[:datetime], 
              phone: match_params[:phone], 
              club_id: match_params[:club_id], 
              receiver_id: match_params[:receiver_id], 
              sender_id: match_params[:sender_id], 
              skill_level: match_params[:skill_level]
            })
        
        if @match.save       
          receiver_email = @match.receiver.email
          MatchMailer.new_match_notification(receiver_email, @match).deliver_now        
          render json: @match, status: :created
        else
          render json: { errors: @match.errors.full_messages }, status: :unprocessable_entity
        end
      end


    def index
        matches = @current_user.matches.map do |match|
          {
            id: match.id,
            datetime: match.datetime,
            phone: match.phone,
            club_id: match.club_id,
            receiver_id: match.receiver_id,
            sender_id: match.sender_id,
            skill_level: match.skill_level
          }
        end
    
        render json: matches
      end

  
    def show
        match = @current_user.matches.find(params[:id])
        render json: match
    end
    

    def update
      match = Match.find(params[:id])
      if match.user_id == @current_user.id || match.receiver_id == @current_user.id
        match.update(match_params)
        if match 
          serialized_match = MatchSerializer.new(match, session: session[:user_id]).serializable_hash
          render json: serialized_match, status: :ok         
        else
          render json: { error: 'Failed to update match' }, status: :unprocessable_entity
        end     
      else
        head :forbidden 
      end
    end

    def destroy
      match = Match.find(params[:id])
      if match.user_id == @current_user.id || match.receiver_id == @current_user.id
        match.destroy
        head :no_content
      else
        head :forbidden
      end
    end
    
    def comments
      match = @current_user.matches.find(params[:id])
      render json: match, serializer: MatchCommentSerializer
    end 

    def index
      match = @current_user.matches.where(status: 'completed')
      render json: match, each_serializer: MatchSerializer
    end
    
    private

    def match_params
        params.require(:match).permit(:email, :datetime, :phone, :club_id, :id, :skill_level, :receiver_id, :sender_id, :status)
    end
    
end


