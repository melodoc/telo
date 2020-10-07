const calc = () => {

    const cardOrder = document.querySelector('#card_order'),
        priceTotal = cardOrder.querySelector('#price-total');

    if (priceTotal !== null) {
        let activeCard = cardOrder.querySelector('input[name="card-type"]:checked'),
            activeClub = cardOrder.querySelector('input[name="club-name"]:checked');

        const price = {
            mozaika: {
                m1: 1999,
                m2: 9900,
                m3: 13900,
                m4: 19900
            },
            schelkovo: {
                m1: 2999,
                m2: 14990,
                m3: 21990,
                m4: 24990
            }
        };

        const checkPromo = () => {
            const inputPromo = cardOrder.querySelector('input[placeholder="Промокод"]').value === `ТЕЛО2020` || false;
            return inputPromo;
        };

        checkPromo();

        const showPrice = () => {
            const count = price[activeClub.value][activeCard.id];
            priceTotal.textContent = (checkPromo()) ? Math.round(count * -0.30 + count) : count;
        };

        showPrice();

        cardOrder.addEventListener('input', event => {
            const { target } = event;
            if (target.name === 'card-type') {
                activeCard = target;
                showPrice();
            } else if (target.name === 'club-name') {
                activeClub = target;
                showPrice();
            } else if (target.placeholder === 'Промокод') {
                showPrice();
            }
        });
    } else {
        return;
    }
};

export default calc;
