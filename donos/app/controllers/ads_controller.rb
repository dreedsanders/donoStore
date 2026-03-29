class AdsController < ApplicationController
    def index 
        @ads = Ad.all 
        render json: @ads
    end

    def create
        Ad.create(ad_params)
    end

    private 
    def ad_params
        params.require(:ad).permit(:image, :description)
    end

end
