from setuptools import setup, find_packages

setup(
    name='serverless-graphql-python',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'graphene',
        'boto3',
    ],
)
