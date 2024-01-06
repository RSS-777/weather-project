import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../utils/date';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import './Contact.css';

export const Contact = () => {
    const [stateSeason, setStateSeason] = useState('');
    const theme = useSelector((state) => state.theme.value);

    useEffect(() => {
        const currentSeason = date();
        setStateSeason(currentSeason.season)
    }, [])

    return (
        <section className={theme === 'white' ? `container-contact-${stateSeason}` : 'container-contact-dark'}>
            <div className='contact-block'>
                <h2 className='contact-h2'>Контакти</h2>
                <div className="contact-info">
                    <span><b>Контакти:</b></span>
                    <p><span>Емейл:</span> contact@srr.com</p>
                    <p><span>Teлефон:</span> +38-098-000-00-00</p>
                    <p><span>Графік роботи:</span> Пн - Пт, 9:00 - 18:00</p>
                </div>
                <div className="contact-info-form">
                    <span><b>Зв'яжіться з нами:</b></span>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
};
