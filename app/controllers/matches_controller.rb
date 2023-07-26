class MatchesController < ApplicationController

    def create
      puts "regular match"
            # byebug
            #changed it to .new instead of .create
            @match = @current_user.matches.new({
              datetime: match_params[:datetime], 
              phone: match_params[:phone], 
              club_id: match_params[:club_id], 
              receiver_id: match_params[:receiver_id], 
              sender_id: match_params[:sender_id], 
              skill_level: match_params[:skill_level]
            })
        if @match.save
          #changed it to .save to have error throw to user
          receiver_email = ENV['MY_EMAIL']
          MatchMailer.new_match_notification(receiver_email, @match).deliver_now
          # byebug
          #checking to see if match_mailer is messing it up
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
    
    #og
    # def update
    #     match = @current_user.matches.find(params[:id])
    #     match.update!(match_params)
    #     render json: match
    # end

    #modified to allow sender and reciever to update shared match
    def update
      match = Match.find(params[:id])
      if match.user_id == @current_user.id || match.receiver_id == @current_user.id
        match.update(match_params)
        # byebug
        if match 
          serialized_match = MatchSerializer.new(match, session: session[:user_id]).serializable_hash
          render json: serialized_match, status: :ok         
        else
          render json: { error: 'Failed to update match' }, status: :unprocessable_entity
        end     
      else
        head :forbidden # or you can return an error message or redirect
      end
    end

  
      
    #og
    # def destroy
    #   # byebug
    #     match = @current_user.matches.find(params[:id])
    #     match.destroy
    #     head :no_content
    # end

    #modified to allow sender and reciever to delete match
    def destroy
      match = Match.find(params[:id])
      if match.user_id == @current_user.id || match.receiver_id == @current_user.id
        match.destroy
        head :no_content
      else
        head :forbidden # or you can return an error message or redirect
      end
    end
    

    def comments
      # byebug
      match = @current_user.matches.find(params[:id])
      render json: match, serializer: MatchCommentSerializer
    end 


    #new method for comments for matches
    def index
      match = @current_user.matches.where(status: 'completed')
      render json: match, each_serializer: MatchSerializer
    end
    

    #mailer method
    # def create
    #   puts "create match in mailer"
    #   @match = Match.new(match_params)

    #   if @match.save
    #     MatchMailer.new_match_notification('caraerskine@gmail.com', @match).deliver_now
    #     redirect_to @match, notice: 'Match was successfully created.'
    #   else
    #     render :new
    #   end
    # end


    private

    def match_params
        params.require(:match).permit(:email, :datetime, :phone, :club_id, :id, :skill_level, :receiver_id, :sender_id, :status)
    end
    
end


