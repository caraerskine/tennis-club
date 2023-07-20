my_email = ENV['MY_EMAIL']

class MatchMailer < ApplicationMailer
    default from: my_email

    def new_match_notification(receiver_email, match)
      # @match = match_params[:match]
      @match = match
      mail(to: receiver_email, subject: 'New Tennis Match Notification')
    end
  
    # def match_update_notification(receiver_email, match)
    #   @match = match
    #   mail(to: receiver_email, subject: 'Match Update Notification')
    # end
end

#not sure i am doing any updates so commented out the second one here