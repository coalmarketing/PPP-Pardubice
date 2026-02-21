---
layout: "pages/objednat-se.njk"

title: 'Objednat se'
description: 'V Senoweb se specializujeme na tvorbu webových stránek na míru. Nepoužíváme koupené šablony, nástroje pro automatizované budování webů ani nástroje, které by váš web zahlcovali zbytečným kódem a tím vaší stránku zpomalovaly.'
permalink: 'objednat-se/'


landing:
  heading: Objednání do poradny

  breadcrumbs:
      - url: /
        title: Domů

      - title: Objednat se


form:
  topper: Formulář
  heading: Žádost o poskytnutí péče

  fieldsets:
    - icon:
        url: /assets/svgs/objednat-se/location_on.svg
        alt: Ikona bodu na mapě

      legend: Výběr pobočky
      text: Vyberte pobočku, kterou preferujete pro vyšetření nebo konzultaci. 

      fields:
        - name: Pobočka
          type: radio
          required: true

          columns: 2

          options:
            - icon: src/assets/svgs/objednat-se/location_city.svg
              value: Pardubice

            - icon: src/assets/svgs/objednat-se/location_city.svg
              value: Chrudim

    - icon:
        url: /assets/svgs/objednat-se/child_care.svg
        alt: Ikona hlavy dítěte

      legend: Údaje o dítěti
      text: Základní informace o dítěti nebo zletilém studentovi, pro kterého žádáte péči.

      fields:
        - name: Jméno a příjmení
          type: text
          autocomplete: name
          required: true
---