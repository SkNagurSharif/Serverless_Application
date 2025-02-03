import graphene
from .queries import Query
from .mutations import CreateUser
import logging

class Resolvers:
    def resolve_hello(self, info):
        return Query().resolve_hello(info)

    def resolve_users(self, info):
        return Query().resolve_users(info)

    def resolve_create_user(self, info, name, email):
        if not name or not email:
            logging.error("Name and email must be provided")
            raise Exception("Name and email must be provided")
        return CreateUser().mutate(info, name, email)
