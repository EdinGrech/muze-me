class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response['Access-Control-Allow-Origin'] = ['http://localhost:8100','http://192.168.0.68:80','*'] # Replace with your frontend origin
        response['Access-Control-Allow-Headers'] = '*' # Allow any custom headers
        return response