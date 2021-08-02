"""empty message

Revision ID: 66b0f90b8aa1
Revises: eec688d8c0ab
Create Date: 2021-08-02 15:58:15.454947

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '66b0f90b8aa1'
down_revision = 'eec688d8c0ab'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('likedPost',
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('postId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['postId'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('userId', 'postId')
    )
    op.drop_table('user_posts')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user_posts',
    sa.Column('userId', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('postId', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['postId'], ['posts.id'], name='user_posts_postId_fkey'),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], name='user_posts_userId_fkey'),
    sa.PrimaryKeyConstraint('userId', 'postId', name='user_posts_pkey')
    )
    op.drop_table('likedPost')
    # ### end Alembic commands ###