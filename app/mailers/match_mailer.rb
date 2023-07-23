class MatchMailer < ApplicationMailer
    # my_email = ENV['MY_EMAIL']
    
    # default from: my_email

    default from: ENV['MY_EMAIL']

    def new_match_notification(receiver_email, match)
      @match = match
      mail(to: receiver_email, subject: 'New Tennis Match Notification')
    end
end

