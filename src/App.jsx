import zapier from './assets/zapier.png'
import stack from './assets/stack.png'
import voiceflow from './assets/voiceflow.png'
import botpress from './assets/botpress.png'
import preview from './assets/preview.png'
import './App.css'
import Card from './components/card/Card'

function App(props) {

  return (
    <div className='ai-automation__container'>
      <div className='ai-automation__container-navbar'>
        <div className='ai-automation__container-navbar_logo'>
          <img src="/logo.png" alt="logo" />
        </div>
        
        <div className='ai-automation__container-navbar_links'>
          <a>Solutions</a>
          <a>About</a>
          <a>Contact</a>
          <a>FAQ</a>
        </div>

        <div className='ai-automation__hamburger'>
          <img src="/hamburger.png" alt="" />
        </div>
      </div>

      <div className='ai-automation__container-hero'>
        <h1>Unlock the Chatbot Advantage for your company <br /> Don’t let competition leave you in the dust</h1>
        <p>
          Whether it be personalizing conversations with potential customers, or guiding your staff on the right operating procedures for your business. We empower your organization with a custom solution for your specific needs, that works 24/7.
        </p>
        <div className='ai-automation__container-hero_img'>
          <img className='img-1' src="/heroAI.png" alt='' />
          <p>We offer our services to Industries Including and not limited to: Real Estate, Health care, Travel & Hospitality, SAAS <br />As well as customer support bots for any Industry.</p>
        </div>
      </div>


      <div className='ai-automation__container-harsh'>

        <div className='ai-automation__container-harsh_img'>
          <img src="/man_img.png" /> 
        </div>

        <div className='ai-automation__container-benefits_section'>
          <div className='ai-automation__container-benefits_img'>
            <div className='blue-box'></div>
            <div className='black-box'></div>
            <img className='benefits-img' src='/benefits_img.png' alt='' />
          </div>
          <div className='ai-automation__container-benefits_text'>
            <h3>YOUR PROJECT IS SAFE WITH US</h3>
            <h1>Main benefits trusting us to help you</h1>
            <p>We love to deliver results for our clients that both ourselves and our clients can be proud of.</p>
            <div className='ai-automation__container-benefits_list-section'>
              <div className='ai-automation__container-benefits_list'>
                <img src="/bullet.png" width="15px" alt="" />
                <p>We have well thought out service delivery processes created to ensure client satisfaction</p>
              </div>
              <div className='ai-automation__container-benefits_list'>
                <img src="/bullet.png" width="15px" alt="" />
                <p>We have worked on over 20 projects since beginning of the year</p>
              </div>
              <div className='ai-automation__container-benefits_list'>
                <img src="/bullet.png" width="15px" alt="" />
                <p>We have a team of experts with over a Decade of experience in the field</p>
              </div>
              <div className='ai-automation__container-benefits_list'>
                <img src="/bullet.png" width="15px" alt="" />
                <p> We have programs and guideline documents your team will need to be ready to go.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='ai-automation__container-cta'>
          <button>Book a Demo call</button>
        </div>

        <div className='ai-automation__container-solutions'>
          <h1>We build solutions with:</h1>
          <div className='ai-automation__container-solutions_img'>
            <img  src={zapier} alt='' />
            <img src={stack} alt='' />
            <img src={voiceflow} alt='' />
            <img src={botpress} alt='' />
            <img src={preview} alt='' />
          </div>
        </div>

        <div className='ai-automation__container-cards'>
          <Card
            img = "/FAQchatb.png"
            className="card-component"
            text= "Customer Service/FAQ Chatbot"
            bullet_text_1= "These chatbots assist customers with common inquiries and issues"
            bullet_text_2= "They work 24/7 and can help reduce between customer service complaint and feedback"
            bullet_text_3= "They can answer FAQs, help with troubleshooting, and escalate complex issues to human agents when needed."
            bullet_text_4= " We have programs and guideline documents your team will need to be ready to go."
          />
          <Card
            img = "/sales.png"
            className="card-component-2"
            text= "Sales and Marketing Chatbots"
            bullet_text_1= "We have well thought out service delivery processes created to ensure client satisfaction"
            bullet_text_2= "We have worked on over 20 projects since beginning of the year"
            bullet_text_3= "We have a team of experts with over a Decade of experience in the field"
            bullet_text_4= " We have programs and guideline documents your team will need to be ready to go."
          />
          <Card
            img = "/woman.png"
            className="card-component"
            text= "Virtual Assistant Chatbot"
            bullet_text_1= "These chatbots assist customers with common inquiries and issues"
            bullet_text_2= "They work 24/7 and can help reduce between customer service complaint and feedback"
            bullet_text_3= "They can answer FAQs, help with troubleshooting, and escalate complex issues to human agents when needed."
            bullet_text_4= "  We have programs and guideline documents your team will need to be ready to go."
          />
          <Card
            img = "/medical.png"
            className="card-component-2"
            text= "Healthcare Chatbot"
            bullet_text_1= "We have well thought out service delivery processes created to ensure client satisfaction"
            bullet_text_2= "We have worked on over 20 projects since beginning of the year"
            bullet_text_3= "We have a team of experts with over a Decade of experience in the field"
            bullet_text_4= " We have programs and guideline documents your team will need to be ready to go."
          />
          <Card
            img = "/realEstate.png"
            className="card-component"
            text= "Real Estate Chatbot"
            bullet_text_1= "These chatbots assist customers with common inquiries and issues"
            bullet_text_2= "They work 24/7 and can help reduce between customer service complaint and feedback"
            bullet_text_3= "They can answer FAQs, help with troubleshooting, and escalate complex issues to human agents when needed."
            bullet_text_4= " We have programs and guideline documents your team will need to be ready to go."
          />
        </div>

        <div className='ai-automation__container-calender'>
          <h1>Schedule a Chatbot Demo and Service Delivery call.</h1>
          <img src='/calendly.png' alt='' />
        </div>

       
        
        <div className='ai-automation__container-copyright'>
          <p>2023 Axel Cyber Enterprises. All Rights Reserved</p>
        </div>
      </div>
    </div>


  )
}

export default App
