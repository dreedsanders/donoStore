class DealsController < ApplicationController
    def index 
        @deals = Deal.all 
        render json: @deals
    end

    def create
        Deal.create(deal_params)
    end

    private 
    def deal_params
        params.require(:deal).permit(:image, :description)
    end



end
