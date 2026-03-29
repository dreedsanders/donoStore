class TransfersController < ApplicationController
    def index
        @transfers = Transfer.all
        render json: @transfers
    end

    def create 
        Transfer.create(transfer_params)
    end

    private 
    def transfer_params
        params.require(:transfer).permit(:buyer_id, :seller_id, :item_id, :amount)
    end



end
