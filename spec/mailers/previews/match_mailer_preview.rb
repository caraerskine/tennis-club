# Preview all emails at http://localhost:3000/rails/mailers/match_mailer
class MatchMailerPreview < ActionMailer::Preview

    def new_match_email
        match = Match.last
        receiver_email = @match.receiver.email
        MatchMailer.new_match_notification(receiver_email, match)
    end

end

