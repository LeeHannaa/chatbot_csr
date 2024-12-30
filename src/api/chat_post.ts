export const fetchChatbotResponse = async (question: string) => {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: question }),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data // 응답 데이터를 반환
  } catch (error) {
    console.error('API 요청 실패:', error)
    throw error // 에러를 상위 함수로 전달
  }
}
