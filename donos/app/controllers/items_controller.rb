class ItemsController < ApplicationController
    def index 
        @items = Item.all
        render json: @items
    end

    def create
        Item.create(item_params)
    end

    private
    def item_params
        params.require(:item).permit(:name, :description, :user_id, :category, :asking_price, :image)
    end


end
