import React from 'react'

function CartQuestion() {
  return (
    <div className='cart_question'>
        <div className='cart_q_header'>
            Frequently asked questions about getting
            medications from farma
        </div>
        <div className='cart_faq'>
            <div className='faq_col_1'>
                <div className='faq'>
                    <h4>How soon can i get my items delivered to me?</h4>
                    <p>
                        We deliver within 24 hours. However, to have your 
                        item(s) delivered the same day, call 08168168391 to make 
                        proper arrangements.   
                    </p>
                </div>
                <div className='faq'>
                    <h4>Can i order prescribed drugs?</h4>
                    <p>
                        Yes you can order prescribed drugs on the farma platform. 
                        You are expected to upload a copy of your doctor's prescription
                        to enable purchase.  
                    </p>
                </div>
                <div className='faq'>
                    <h4>Do you accept payment on delivery</h4>
                    <p>
                        We accept payment on delivery, but this option is not open to 
                        all locations/product types. Depending on the product purchase 
                        and delivery location, a customer may or may not be entitled to
                        payment on delivery.  
                    </p>
                </div>
                <div className='faq'>
                    <h4>How do i track my order?</h4>
                    <p>
                        Customers who purchase an order from farma platform can track their
                        order from the customer dashboard. This dashboard is made available to
                        registered customers. Also, we send progress emails to our customers
                        to inform them of the status of their orders.  
                    </p>
                </div>
            </div>
            <div className='faq_col_2'>
                <div className='faq'>
                    <h4>How do i make bulk purchases?</h4>
                    <p>
                        To make bulk purchases kindly put a call through or 
                        whatsapp 09071033529 or send a mail 
                    </p>
                </div>
                <div className='faq'>
                    <h4>Are my card details safe on the farma platform</h4>
                    <p>
                        We currently use a payment technology that ensures that our
                        customers' details/card details are not saved on the platform,
                        hence your details can hacked or gotten. Thus, your card details
                        are safe on the farma platform 
                    </p>
                </div>
                <div className='faq'>
                    <h4>Can i speak to a Qualified Doctor on the website?</h4>
                    <p>
                        Yes you can. We are also a telehealth platform having partnership
                        with an array of qualified doctors you can talk to for your
                        health and wellness related issues. But this comes at a subscription
                        cost.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartQuestion