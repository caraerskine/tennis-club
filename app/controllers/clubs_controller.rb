class ClubsController < ApplicationController
    skip_before_action :authorize, only: [:index, :clubs_matches]
            
    def create
        club = Club.create!(club_params)
        render json: club, status: :created
    end
    
    
    def index
       render json: Club.all
    end
          

    def show
        club = Club.find(params[:id])
        render json: club
    end

    private
    
    def club_params
            params.permit(:club_name, :street, :description, :club_img)
    end        

end
