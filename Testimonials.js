import React from "react";

function Testimonials() {
    // Placeholder testimonials. This data would typically be fetched from a database.
    const testimonials = [
        { id: 1, name: 'User A', feedback: 'Great platform!' },
        { id: 2, name: 'User B', feedback: 'Easy to use and secure!' },
        // ... other testimonials
    ];

    return (
        <section className="testimonials">
            {testimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-item">
                    <p>"{testimonial.feedback}"</p>
                    <span>- {testimonial.name}</span>
                </div>
            ))}
        </section>
    );
}

export default Testimonials;