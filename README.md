Приложение - "Получение карточек активностей с внешнего API"
(Приложение рабочее, но не оптимизировано. Смотрите репозиторий ActivityEdited-redux-react.)

В данном варианте существует только 2 типа асихронного запроса к серверу: 
1) получение рандомных карточек активностей;
2) получение карточек определенного типа.

Из-за второго типа происходит нагромождение кода, т.к. создается switch-case конструкция для всех типов и попутное усложнение кода дополнительными функциями.

Приложение учебное, позволило увидеть - как на равном месте можно изобрести велисопед с квадратными колесами.

В ActivityEdited-redux-react данные недочеты были устранены.
