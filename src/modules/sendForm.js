const sendForm = selectedForm => {

    const loadMessage = 'Загрузка...',
        acceptMessage = 'Необходимо согласие на обработку данных';

    const form = document.getElementById(selectedForm);

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 1.5rem;`;

    const phoneInput = form.querySelector('[type="tel"]');
    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/[^\d+]/g, '');
    });

    const textInput = form.querySelectorAll('[type="text"]');
    textInput.forEach(elem => {
        if (elem !== null && !elem.classList.contains('promocode')) {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^А-Яа-я\s]/g, '');

            });
        } else if (elem !== null && elem.classList.contains('promocode')) {
            elem.addEventListener('input', () => {
                form.querySelector('.hide').value = elem.value;

            });
        }
    });

    form.addEventListener('submit', event => {
        const dataProcessing = form.querySelector('.data-processing');

        if (dataProcessing === null || dataProcessing.checked) {
            if (phoneInput.value.length >= 5 && phoneInput.value.length <= 15) {
                event.preventDefault();
                form.appendChild(statusMessage);
                if (!statusMessage.textContent) {
                    statusMessage.style.cssText = 'font-size: 1.5rem; color: white; margin-top: 10px;';
                    statusMessage.textContent = loadMessage;
                    if (form.classList.contains('black')) {
                        statusMessage.style.cssText = 'font-size: 1.5rem; color: black; margin-top: 10px;';
                    }

                } else {
                    statusMessage.textContent = '';
                    statusMessage.textContent = loadMessage;
                    statusMessage.style.cssText = 'font-size: 1.5rem; color: white; margin-top: 10px;';
                    if (form.classList.contains('black')) {
                        statusMessage.style.cssText = 'font-size: 1.5rem; color: black; margin-top: 10px;';
                    }
                }

                const formData = new FormData(form);
                const body = {};
                for (const val of formData.entries()) {
                    body[val[0]] = val[1];
                }

                postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('status network is not 200');
                        }

                        const thanks = document.getElementById('thanks');
                        thanks.style.display = 'inline';

                        thanks.addEventListener('click', event => {
                            let target = event.target;
                            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                                thanks.style.display = 'none';
                            } else {
                                target = target.closest('.form-content');

                                if (!target) {
                                    thanks.style.display = 'none';
                                }
                            }

                            if (dataProcessing !== null) {
                                dataProcessing.checked = false;

                            }
                        });

                        if (form.classList.contains('modal-form')) {
                            const modal = document.querySelectorAll('.popup-form');
                            modal.forEach(item => { item.style.display = 'none'; });
                        }
                        statusMessage.remove();

                    })
                    .catch(error => {
                        const errorMassage = document.getElementById('thanks');
                        errorMassage.querySelector('h4').textContent = 'Извините';
                        errorMassage.querySelector('p').textContent = 'Что-то пошло не так...';
                        statusMessage.remove();

                        errorMassage.style.display = 'inline';
                        errorMassage.addEventListener('click', event => {
                            let target = event.target;
                            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
                                errorMassage.style.display = 'none';
                            } else {
                                target = target.closest('.form-content');

                                if (!target) {
                                    errorMassage.style.display = 'none';
                                }
                            }

                            if (dataProcessing !== null) {
                                dataProcessing.checked = false;
                            }
                        });
                    });


                const inputs = form.querySelectorAll('input');
                if (form.classList.contains('card-order')) {
                    document.querySelector('#card_leto_mozaika').checked = true;
                    document.querySelector('#card_leto_schelkovo').checked = false;
                    document.querySelector('#m1').checked = true;
                    document.querySelector('#m2').checked = false;
                    document.querySelector('#m3').checked = false;
                    document.querySelector('#m4').checked = false;
                    document.querySelector('.hide').value = "";
                } else if (form.classList.contains('card-order-club')) {
                    const cards = document.querySelectorAll('[name="card-type"]');
                    cards.forEach((elem, index) => {
                        if (index == 0) {
                            elem.checked = true;
                        } else {
                            elem.checked = false;
                        }
                    });
                }

                inputs.forEach(elem => {
                    if (elem.type !== 'radio' && elem.type !== 'hidden') {
                        elem.value = '';
                    }

                });
            } else {
                event.preventDefault();
                form.appendChild(statusMessage);
                const phoneInput = form.querySelector('[type="tel"]');
                phoneInput.value = '';
                statusMessage.textContent = 'Введите, пожалуйста, корректный номер телефона';

                if (form.classList.contains('black')) {
                    statusMessage.style.cssText = 'font-size: 1.5rem; color: black; margin-top: 10px;';
                } else {
                    statusMessage.style.cssText = 'font-size: 1rem; color: white; margin-top: 10px;';
                }

            }
        } else {
            event.preventDefault();
            form.appendChild(statusMessage);
            if (!statusMessage.textContent) {
                statusMessage.textContent = acceptMessage;
                statusMessage.style.cssText = 'font-size: 1rem; color: white; margin-top: 10px;';
                if (form.classList.contains('black')) {
                    statusMessage.style.cssText = 'font-size: 1.5rem; color: black; margin-top: 10px;';
                }

            } else {
                statusMessage.textContent = '';
                statusMessage.textContent = acceptMessage;
                statusMessage.style.cssText = 'font-size: 1rem; color: white; margin-top: 10px;';
                if (form.classList.contains('black')) {
                    statusMessage.style.cssText = 'font-size: 1.5rem; color: black; margin-top: 10px;';
                }
            }
        }
    });

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};

export default sendForm;
