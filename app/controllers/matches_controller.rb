class MatchesController < ApplicationController

    def create
        game = @current_user.matches.create!(match_params)
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


    private

    def match_params
        params.permit(:club, :date, :time, :skill_level, :contact_info, :status)
    end
  

end
