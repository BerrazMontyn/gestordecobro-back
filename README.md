# Backend

## Endpoints

### `POST /payments`

Body:

```js
{
  name: String;
  detail: String;
  expirationDate: String;
}
```

### `PUT /payments/:id`

URL Parameters and Body:

```js
id: Number;

{
  name: String;
  detail: String;
  expirationDate: String;
}
```

### `POST /services`

Body:

```js
{
  name: String;
}
```

### `PUT /services/:id`

URL Parameters and Body:

```js
id: Number;

{
  name: String;
}
```

### `POST /customers`

Body:

```js
{
  name: String;
  indentityCard: String;
  address: String;
  email: String;
  cellPhone: String;
}
```

### `PUT /customers/:id`

URL Parameters and Body:

```js
id: Number;

{
  name: String;
  indentityCard: String;
  address: String;
  email: String;
  cellPhone: String;
}
```

### `POST /companies`

Body:

````js
{
  name: String;
  services: [String];
}


### `GET /admin/:id`

URL Parameters:

```js
id: 1;
````

User Admin:

```js
{
  user: "admin@admin.com",
  password: "123456"
}
```

## Configuración:

- Crear un archivo `.env` para las variables de entorno tome de guia, el ejemplo de configuracion en `.env.example`
- Instalar dependencias `npm install`
- Iniciar el servidor `npm start`
- Navegar a http://localhost:3001/
