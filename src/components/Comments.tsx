import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  date: string;
  text: string;
  likes: number;
  replies?: Comment[];
}

interface CommentsProps {
  articleId: number;
}

const Comments = ({ articleId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Алексей Иванов',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      date: '2 часа назад',
      text: 'Отличная статья! Очень познавательно и интересно написано. Спасибо автору за труд.',
      likes: 12,
      replies: [
        {
          id: 11,
          author: 'Дмитрий Петров',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry',
          date: '1 час назад',
          text: 'Полностью согласен! Жду продолжения.',
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      author: 'Михаил Сидоров',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      date: '5 часов назад',
      text: 'Интересный взгляд на тему. Хотелось бы больше примеров из практики.',
      likes: 8,
    },
    {
      id: 3,
      author: 'Сергей Козлов',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sergey',
      date: '1 день назад',
      text: 'Добавьте, пожалуйста, ссылки на источники. Хочется изучить тему глубже.',
      likes: 15,
      replies: [
        {
          id: 31,
          author: 'Никита Шабалов',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nikita',
          date: '20 часов назад',
          text: 'Спасибо за отзыв! Обновил статью, добавил список литературы в конце.',
          likes: 5,
        },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: 'Вы',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User',
      date: 'Только что',
      text: newComment,
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleAddReply = (parentId: number) => {
    if (!replyText.trim()) return;

    const reply: Comment = {
      id: Date.now(),
      author: 'Вы',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=User',
      date: 'Только что',
      text: replyText,
      likes: 0,
    };

    setComments(
      comments.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply],
          };
        }
        return comment;
      })
    );

    setReplyText('');
    setReplyTo(null);
  };

  const handleLike = (commentId: number, isReply: boolean = false, parentId?: number) => {
    if (!isReply) {
      setComments(
        comments.map((comment) =>
          comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment
        )
      );
    } else if (parentId) {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId && comment.replies) {
            return {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === commentId ? { ...reply, likes: reply.likes + 1 } : reply
              ),
            };
          }
          return comment;
        })
      );
    }
  };

  const CommentItem = ({
    comment,
    isReply = false,
    parentId,
  }: {
    comment: Comment;
    isReply?: boolean;
    parentId?: number;
  }) => (
    <div className={`${isReply ? 'ml-12 mt-4' : ''}`}>
      <div className="flex space-x-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={comment.avatar} alt={comment.author} />
          <AvatarFallback>{comment.author[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-semibold text-sm">{comment.author}</span>
            <span className="text-xs text-muted-foreground">{comment.date}</span>
          </div>

          <p className="text-sm mb-3 leading-relaxed">{comment.text}</p>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-xs"
              onClick={() => handleLike(comment.id, isReply, parentId)}
            >
              <Icon name="ThumbsUp" size={14} className="mr-1" />
              {comment.likes > 0 && comment.likes}
            </Button>

            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => setReplyTo(comment.id)}
              >
                <Icon name="MessageSquare" size={14} className="mr-1" />
                Ответить
              </Button>
            )}
          </div>

          {replyTo === comment.id && !isReply && (
            <div className="mt-4 space-y-3 animate-fade-in">
              <Textarea
                placeholder="Напишите ответ..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[80px]"
              />
              <div className="flex space-x-2">
                <Button size="sm" onClick={() => handleAddReply(comment.id)}>
                  Отправить
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setReplyTo(null);
                    setReplyText('');
                  }}
                >
                  Отмена
                </Button>
              </div>
            </div>
          )}

          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 space-y-4">
              {comment.replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  isReply={true}
                  parentId={comment.id}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black font-heading">
          Комментарии <span className="text-muted-foreground">({comments.length})</span>
        </h3>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <Textarea
              placeholder="Поделитесь своим мнением..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={handleAddComment} disabled={!newComment.trim()}>
              <Icon name="Send" size={18} className="mr-2" />
              Опубликовать
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="p-6">
              <CommentItem comment={comment} />
            </CardContent>
          </Card>
        ))}
      </div>

      {comments.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Icon name="MessageSquare" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Будьте первым, кто оставит комментарий к этой статье
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Comments;
