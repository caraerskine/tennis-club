class MatchesController < ApplicationController

    def create
             skill_level = match_params[:skill_level] == "true"

            match = @current_user.matches.create({
              datetime: match_params[:datetime], 
              phone: match_params[:phone], 
              club_id: match_params[:club_id], 
              receiver_id: match_params[:receiver_id], 
              sender_id: match_params[:sender_id], 
              skill_level: match_params[:skill_level]
            })
          
            if match_params[:skill_level] == "false"
                match.skill_level = false
            end

        if match
          render json: match, status: :created
        else
          render json: { errors: match.errors.full_messages }, status: :unprocessable_entity
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
            skill_level: match.skill_level,
            skill_level_string: match.skill_level? ? 'intermediate' : 'beginner'
          }
        end
    
        render json: matches
      end

  
    def show
        match = @current_user.matches.find(params[:id])
        render json: match
    end
    
    def update
        match = @current_user.matches.find(params[:id])
        match.update!(match_params)
        render json: match
    end

    def destroy
        match = @current_user.matches.find(params[:id])
        match.destroy
        head :no_content
    end

    def comments
      # byebug
      match = @current_user.matches.find(params[:id])
      render json: match, serializer: MatchCommentSerializer
    end 


    #mailer method
    def create
      @match = Match.new(match_params)

      if @match.save
        MatchMailer.new_match_notification('caraerskine@gmail.com', @match).deliver_now
        redirect_to @match, notice: 'Match was successfully created.'
      else
        render :new
      end
    end


    private

    def match_params
        params.require(:match).permit(:name, :email, :datetime, :phone, :club_id, :id, :skill_level, :receiver_id, :sender_id)
    end
    
end


