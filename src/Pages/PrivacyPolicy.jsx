import React from 'react'
import { Container } from '../components'

function PrivacyPolicy() {
  return (
    <div className='py-8 bg-gray-900 min-h-screen'>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 text-lg">Last updated: January 2025</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="prose prose-invert max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <div className="text-gray-300 space-y-3">
                  <p>When you use Blogify, we collect the following types of information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Account Information:</strong> Name, email address when you create an account</li>
                    <li><strong>Content:</strong> Blog posts, comments, and images you upload</li>
                    <li><strong>Usage Data:</strong> How you interact with our platform</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We use your information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide and maintain our blogging platform</li>
                    <li>Enable you to create, edit, and manage your blog posts</li>
                    <li>Authenticate your account and ensure security</li>
                    <li>Improve our services and user experience</li>
                    <li>Communicate with you about platform updates</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Data Storage and Security</h2>
                <div className="text-gray-300 space-y-3">
                  <p>Your data is stored securely using:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Appwrite:</strong> Our backend service provider with enterprise-grade security</li>
                    <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
                    <li><strong>Access Controls:</strong> Only you can access and modify your content</li>
                    <li><strong>Regular Backups:</strong> Your data is regularly backed up for protection</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We do not sell, trade, or share your personal information with third parties except:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When you explicitly make your blog posts public</li>
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements</li>
                    <li>To protect our rights and safety</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies and Tracking</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We use minimal tracking technologies:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for authentication and platform functionality</li>
                    <li><strong>No Analytics:</strong> We do not use third-party analytics or tracking</li>
                    <li><strong>No Advertising:</strong> We do not use advertising cookies or trackers</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We retain your data:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>For as long as your account is active</li>
                    <li>Until you request deletion</li>
                    <li>As required by applicable laws</li>
                    <li>Backups may be retained for up to 30 days after deletion</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We use the following third-party services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Appwrite:</strong> Backend services and data storage</li>
                    <li><strong>TinyMCE:</strong> Rich text editor functionality</li>
                  </ul>
                  <p>These services have their own privacy policies that govern their data practices.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    Blogify is not intended for children under 13 years of age. We do not knowingly collect 
                    personal information from children under 13. If you become aware that a child has provided 
                    us with personal information, please contact us.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
                <div className="text-gray-300 space-y-3">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy
