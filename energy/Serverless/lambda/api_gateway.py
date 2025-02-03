import boto3
import os
import logging

apigateway = boto3.client('apigateway')

def create_api_gateway():
    try:
        # Create the API Gateway
        response = apigateway.create_rest_api(
            name='my-api',
            description='My API'
        )

        # Get the API ID
        api_id = response['id']

        # Create the API Gateway resource
        response = apigateway.create_resource(
            restApiId=api_id,
            parentId='root',
            pathPart='products'
        )

        # Get the resource ID
        resource_id = response['id']

        # Create the API Gateway method with authorization
        response = apigateway.put_method(
            restApiId=api_id,
            resourceId=resource_id,
            httpMethod='GET',
            authorization='AWS_IAM'  # Change to appropriate authorization method
        )

        # Get the method ID
        method_id = response['id']

        # Create the API Gateway integration
        response = apigateway.put_integration(
            restApiId=api_id,
            resourceId=resource_id,
            httpMethod='GET',
            integrationHttpMethod='POST',
            type='LAMBDA',
            uri=os.environ['LAMBDA_FUNCTION_URI']  # Use environment variable for the Lambda function URI
        )

        # Get the integration ID
        integration_id = response['id']

        # Create the API Gateway deployment
        response = apigateway.create_deployment(
            restApiId=api_id,
            stageName='prod'
        )

        # Get the deployment ID
        deployment_id = response['id']

        # Return the API Gateway URL
        return f'https://{api_id}.execute-api.us-east-1.amazonaws.com/prod/products'
    except Exception as e:
        logging.error(f"Error creating API Gateway: {str(e)}")
        raise
