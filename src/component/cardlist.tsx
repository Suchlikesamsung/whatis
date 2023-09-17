import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const IssueList: React.FC = () => {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    const apiKey = process.env.API_KEY; // 공개키로 작업시 headers 주석 처리 할 것

    const config = {
      url: 'https://api.github.com/repos/angular/angular-cli/issues',
      params: {
        state: 'open', // Open 상태의 이슈 필터링
        sort: 'comments', // 댓글 수를 기준으로 정렬
        per_page: 10, // 페이지 당 10개의 이슈 가져오기
      },
      headers: {
        Authorization: `token ${apiKey}`, // 비밀 키를 헤더에 추가
      },
    };

    // GitHub API에서 이슈 리스트를 가져옵니다.
    axios
      .get<any[]>(config.url, {
        params: config.params,
        headers: config.headers,
      })
      .then((response: AxiosResponse<any[]>) => {
        setIssues(response.data);
      })
      .catch((error) => {
        console.error('Error fetching issues:', error);
      });
  }, []);

  return (
    <div>
      <h1>테스트</h1>
      <ul>
        {issues.map((issue: any) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;
