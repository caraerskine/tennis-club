class ClubsController < ApplicationController
    skip_before_action :authorize, only: [:index]
            
    def index
        render json: Club.all
    end
    
    def create
        court = Club.create!(club_params)
        render json: club, status: :created
    end
    
    def show
        court = Club.find(params[:id])
        render json: club
    end

    private
    
    def club_params
            params.permit(:club_name, :street, :description)
    end        

end
