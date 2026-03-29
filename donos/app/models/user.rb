class User < ApplicationRecord
    # has_secure_password

    has_many :items 
    has_many :transfers
    has_many :carts
    has_many :wishlists


       def mycart
        Cart.all.select{|cart_item| cart_item.user_id == self.id}
    end

     def mywishlist
        Wishlist.all.select{|wishlist_item| wishlist_item.user_id == self.id}
    end


    def myTransfers
        transfers = Transfer.select{|transfer| transfer.buyer_id == self.id}
        sellers = 
        p transfers
    end
end
