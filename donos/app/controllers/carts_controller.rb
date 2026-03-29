class CartsController < ApplicationController

    def index
        @carts - Cart.all
        render json: @carts
    end


    def create
        cart = Cart.find_or_create_by(carts_params)
         puts "did it save?"
        puts cart.save
        render json: cart 
    end

    private 
    def carts_params 
        params.require(:cart).permit(:user, :item)
    end


end
