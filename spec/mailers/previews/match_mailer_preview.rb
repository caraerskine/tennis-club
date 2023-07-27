# Preview all emails at http://localhost:3000/rails/mailers/match_mailer
class MatchMailerPreview < ActionMailer::Preview

    def new_match_email
        # Set up a temporary match for the preview
        match = Match.last
        MatchMailer.new_match_notification('tennisprojectdev@gmail.com', match)
    end

end

#notification
#added my email ? idk it use to be 'receiver@example.com'