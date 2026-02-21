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

      columns: 2

      fields:
        - name: Jméno a příjmení
          type: text
          autocomplete: name
          required: true

        - name: Datum narození
          type: text
          autocomplete: bday
          required: true

    - icon:
        url: /assets/svgs/objednat-se/child_care.svg
        alt: Ikona hlavy dítěte

      legend: Kontaktní údaje
      text: Údaje, na kterých vás budeme kontaktovat ohledně termínu a dalších informací.

      columns: 2

      fields:
        - name: Ulice a číslo popisné
          type: text
          autocomplete: address-line1
          required: true

        - name: PSČ
          type: text
          autocomplete: postal-code
          required: true

        - name: Obec
          type: text
          autocomplete: address-line2
          required: true

        - name: Email
          type: email
          autocomplete: email
          required: true

        - name: Telefon
          type: tel
          autocomplete: tel
          required: true

    - icon:
        url: /assets/svgs/objednat-se/account_balance.svg
        alt: Ikona hlavy dítěte

      legend: Údaje o škole
      text: Informace o škole pomáhají lépe porozumět situaci dítěte.

      columns: 2

      fields:
        - name: Název školy
          type: text
          autocomplete: off
          required: true

        - name: Ročník
          type: text
          autocomplete: off
          required: true

    - icon:
        url: /assets/svgs/objednat-se/escalator_warning.svg
        alt: Ikona rodiče s dítětem

      legend: Zákonný zástupce
      text: Údaje k potvrzení zákonného zastoupení dítěte a k vedení dokumentace k žádosti.

      columns: 2

      fields:
        - name: Jméno a příjmení
          type: text
          autocomplete: off
          required: true

        - name: Titul
          type: text
          autocomplete: off
          required: true

    - icon:
        url: /assets/svgs/objednat-se/help.svg
        alt: Ikona otazníku v kroužku

      legend: Důvod žádosti
      text: Vyberte oblast, se kterou potřebujete pomoci. Můžete označit i více možností.

      fields:
        - name: Jméno a příjmení
          type: text
          autocomplete: off
          required: true

        - type: separator

        - name: Upřesnění požadavku
          type: textarea
          placeholder: Stručně popište důvod žádosti a aktuální situaci dítěte.
          required: true

    - icon:
        url: /assets/svgs/objednat-se/local_hospital.svg
        alt: Ikona znaku nemocnice

      legend: Zdravotní a spolupracující zařízení
      text: Uveďte odborníky nebo zařízení, se kterými již spolupracujete (pokud je to relevantní).

      columns: 2

      fields:
        - name: Lékař specialista
          type: text
          autocomplete: off
          placeholder: Například DPA, neurologie
          required: true

        - name: Spolupracující zařízení
          type: text
          autocomplete: off
          placeholder: SVP, OSPOD, jiné
          required: true
---