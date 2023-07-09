class MatchesController < ApplicationController

    def create
        match = @current_user.matches.create!(match_params)
        render json: match, status: :created
    end

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
        params.permit(:datetime, :phone, :club_id, :skill_level, :status)
    end
  

end
