import json
import graphene
import logging
from energy.Serverless.graph.schema import Query, Mutation

# Configure logging
logging.basicConfig(level=logging.INFO)

def lambda_handler(event, context):
    # Get the GraphQL query from the event
    query = event.get('query')
    variables = event.get('variables')
    operation_name = event.get('operationName')

    # Input validation
    if not query:
        logging.error("No query provided")
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'No query provided'}),
            'headers': {
                'Content-Type': 'application/json'
            }
        }

    try:
        # Execute the GraphQL query
        result = graphene.Schema(query=Query, mutation=Mutation).execute(query, variables=variables, operation_name=operation_name)

        # Return the result as a JSON response
        return {
            'statusCode': 200,
            'body': json.dumps(result.data),
            'headers': {
                'Content-Type': 'application/json'
            }
        }
    except Exception as e:
        logging.error(f"Error executing query: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal Server Error'}),
            'headers': {
                'Content-Type': 'application/json'
            }
        }
