class UsersController < ApplicationController

    #GET /me 
#get current user, render it in json 
def show
    user = User.find_by(id: session[:user_id])
    # byebug
    if user
        render json: user, status: :ok
    else
        render json: {errors: user.errors.full_messages}, status: :unauthorized            
    end    
end

