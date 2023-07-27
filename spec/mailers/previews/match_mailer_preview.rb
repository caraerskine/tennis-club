# Preview all emails at http://localhost:3000/rails/mailers/match_mailer
class MatchMailerPreview < ActionMailer::Preview

    def new_match_email
        # Set up a temporary match for the preview
        match = Match.last
        receiver_email = @match.receiver.email
        # MatchMailer.new_match_notification('tennisprojectdev@gmail.com', match)
        MatchMailer.new_match_notification(receiver_email, match)
        #took off .deliver_now from line 9
    end

end

#notification
#added my email ? idk it use to be 'receiver@example.com'