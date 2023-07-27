class MatchMailer < ApplicationMailer
    default from: ENV['MY_EMAIL']

    def new_match_notification(receiver_email, match)
      @match = match
      # byebug
      mail(to: receiver_email, subject: 'New Tennis Match Notification')
    end
end

#ben said i'm not doing anything with match here
#but @match = match is for my .erb and .text file I thought 