class UsersController < ApplicationController
skip_before_action :authorize, only: [:create, :index] 

#POST /signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}
            # , status: :unprocessable_entity  -- not sure if i need this line back on line 13
        end
    end

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


private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
