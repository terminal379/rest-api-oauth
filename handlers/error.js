function errorHandler(error, request, response, next) {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Oops! Alguna cosa ha anat malament."
    }
  });
}

module.exports = errorHandler;
