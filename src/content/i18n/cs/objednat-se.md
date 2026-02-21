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
        - type: radio
          required: true
          columns: 2

          options:
            - icon:
                url: /assets/svgs/objednat-se/choices/location_city.svg
                alt: Ikona budovy
---