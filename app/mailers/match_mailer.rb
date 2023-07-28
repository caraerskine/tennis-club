class MatchMailer < ApplicationMailer
    default from: ENV['MY_EMAIL']

    def new_match_notification(receiver_email, match)
      @match = match
      mail(to: receiver_email, subject: 'New Tennis Match Notification')
    end
end

# class MatchMailer < ApplicationMailer
#   default from: -> { @current_user.email if @current_user.present? }

#   def new_match_notification(receiver_email, match)
#     @match = match
#     mail(to: receiver_email, subject: 'New Tennis Match Notification')
#   end
# end

#might change later? does work w me as default sender

