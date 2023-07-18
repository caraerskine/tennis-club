class MatchesController < ApplicationController

    #OG
    # def create
    #     puts "Match Params: #{match_params}"
    #     match = @current_user.matches.create!(match_params)
    #     render json: match, status: :created
    # end

    def create
            # byebug
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

  

    #index method suggested to get club_name to show up on match card
    # def index
    #     @matches = Match.includes(:club).all
    #     render json: @matches.to_json(include: { club: { only: :club_name } })
    #   end
      
    # def index
    #     match = @current_user.includes(:club).where(user_id: user.id)
    #     render json: match, each_serializer: ClubMatchSerializer, include: ['club']
    # end
      
   #og index
    def index
        render json: @current_user.matches
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
    #need toggle here too

    def destroy
        match = @current_user.matches.find(params[:id])
        match.destroy
        head :no_content
    end

    #custom methods for corresponding custom routes

    #if a current_user has a match that has not yet been accepted by the receiver or rejected it is pending
    #user_id and #sender_id
    def pending
        @pending_matches = Match.where(sender_id: current_user.id, status: 'pending')
    end

#if a current_user has a match that has been accepted by the receiver
    #user_id and #sender_id    
    def accepted
        @accepted_matches = Match.where(receiver_id: current_user.id, status: 'accepted')
    end

    #if a current_user has a match that has been completed    
    #user_id and #sender_id
    def completed
        @completed_matches = Match.where(receiver_id: current_user.id, status: 'completed')
    end

     #if a current_user has a match that has been rejected   
    #user_id and #sender_id
    def rejected
        @rejected_matches = Match.where(receiver_id: current_user.id, status: 'rejected')
    end
      


    private

    def match_params
        params.require(:match).permit(:datetime, :phone, :club_id, :id, :skill_level, :receiver_id, :sender_id)
    end
  

end
