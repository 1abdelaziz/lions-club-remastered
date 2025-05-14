    import './ContactForm.css';

    export default function ContactForm(props) {
        function handleSubmit(e) {
            e.preventDefault();
            props.onSubmit(e);
        }

        return (
            <form 
                method={props.method || "POST"} 
                action={props.action || null}
                className="needs-validation" 
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    className="form-control mb-3" 
                    id="fullName" 
                    placeholder="Nom complet" 
                    required 
                />

                <input 
                    type="email" 
                    className="form-control mb-3" 
                    id="email" 
                    placeholder="Email" 
                    required 
                />

                <input 
                    type="tel" 
                    className="form-control mb-3" 
                    id="phone" 
                    placeholder="Téléphone (optionnel)" 
                />

                <select className="form-select mb-3" id="subject" required>
                    <option value="">Sujet</option>
                    <option value="support">Support technique</option>
                    <option value="sales">Demande commerciale</option>
                    <option value="partnership">Partenariat</option>
                    <option value="volunteering">Devenir bénévole</option>
                    <option value="donation">Faire un don</option>
                    <option value="event">Participation à un événement</option>
                    <option value="other">Autre</option>
                </select>

                <textarea 
                    className="form-control mb-3" 
                    id="message" 
                    rows="5" 
                    placeholder="Message" 
                    required
                ></textarea>

                <button type="submit" className="btn btn-warning w-100">
                    {props.submitText || "Envoyer"}
                </button>
            </form>
        )
    }