const STATUS_CODE = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500,
  UNPROCESSABLE_ENTITY: 422,
  CONFLICT: 409
});
const STATUS_TEXT = Object.freeze({
  CREATED: 'created',
  BAD_REQUEST: 'bad request',
  OK: 'Ok',
  CONFLICT: 'conflict',
  UNPROCESSABLE_ENTITY: 'unprocessable entity'
});

function badRequestResponse(response, text = STATUS_TEXT.BAD_REQUEST) {
  return response.status(STATUS_CODE.BAD_REQUEST).send(text);
}

function createdResponse(response, text = STATUS_TEXT.CREATED) {
  return response.status(STATUS_CODE.CREATED).send(text);
}

function okResponse(response, text = STATUS_TEXT.OK) {
  return response.status(STATUS_CODE.OK).send(text);
}

function serverErrorResponse(response, error) {
  return response.status(STATUS_CODE.SERVER_ERROR).send('Erro interno do servidor!');
}

function conflictResponse(response, text = STATUS_TEXT.CONFLICT) {
  return response.status(STATUS_CODE.CONFLICT).send(text);
}

function validateSchemaResponse(response, text = STATUS_TEXT.UNPROCESSABLE_ENTITY) {
  return response.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(text);
}

export {
  badRequestResponse,
  createdResponse,
  okResponse,
  serverErrorResponse,
  validateSchemaResponse,
  conflictResponse
};
