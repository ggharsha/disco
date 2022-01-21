class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]
    before_action :require_logged_out, only: [:create]

    def create
    end

    def destroy
    end
end
