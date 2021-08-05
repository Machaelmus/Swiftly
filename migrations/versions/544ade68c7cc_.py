"""empty message

Revision ID: 544ade68c7cc
Revises: 45ba102a5b9a
Create Date: 2021-08-05 15:56:23.523859

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '544ade68c7cc'
down_revision = '45ba102a5b9a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('albums',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('albumCreatedAt', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('albums')
    # ### end Alembic commands ###