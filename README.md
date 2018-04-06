# React-Trello-like-todo



##Structure

  - header

    - logo

  - content

    - board-header

      - board-name

    - board-content
       `state: data`
       `props: handleAddList, handelDeleteList, handleChangeListHeader, handleAddCard, handleDeleteCard, handleToggleChecked, updateDashboard, generateID` 

      - list-group

        - list-wrap
          `props: data, handleAddCard, handleDeleteCard, handleChangeListHeader`, 
          - list-content
            `props: data, data.header, data.details, data.ids, handleAddCard, handleDeleteCard, handleToggleChecked, handleChangeListHeader `
            `funcProps: updateListStatus `
            - list-header

              - textarea
                `props: data.header, handleChangeListHeader`
              - list-status
                `props: updateListStatus`

            - list-card
              `props: data.details, data.ids, handleToggleChecked ,handleDeleteCard `
              - list-member

                - list-detail

                - list-edit

            - card-adder-wrap
              `funcProps: showCardAddBtn`

            - adding-card

              - item-add-input

              - item-add-btn
                `props: handleAddCard, data `
                `funcProps: hideCardAddBtn`

              - item-cancel-btn
                `funcProps: hideCardAddBtn`

      - list-adder-wrap
        `props: data, handleAddList, handelDeleteList, updateDashboard`

        - add-input

        - add-btn
          `funcProps: hideListAddBtn`
          `props: handleAddList`

        - cancel-btn

          `funcProps: hideListAddBtn`

        - list-adder
          `funcProps: showListAddBtn`

        - dashboard
          `props: data, updateDashboard`

