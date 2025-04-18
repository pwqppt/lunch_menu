"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Utensils, RefreshCw } from "lucide-react"

// 한식 메뉴 데이터
const koreanFood = [
  { name: "비빔밥", description: "다양한 나물과 고기를 밥 위에 올리고 고추장과 함께 비벼 먹는 음식" },
  { name: "김치찌개", description: "김치와 돼지고기 등을 넣고 끓인 매콤한 찌개" },
  { name: "된장찌개", description: "된장을 풀어 두부, 채소 등을 넣고 끓인 찌개" },
  { name: "불고기", description: "양념한 쇠고기를 구워 먹는 요리" },
  { name: "제육볶음", description: "고추장 양념에 돼지고기를 볶은 매콤한 요리" },
  { name: "떡볶이", description: "떡과 어묵을 고추장 양념에 볶은 매콤달콤한 분식" },
  { name: "순두부찌개", description: "순두부와 해산물 등을 넣고 끓인 얼큰한 찌개" },
  { name: "갈비탕", description: "소갈비를 넣고 오래 끓인 국물 요리" },
  { name: "냉면", description: "차가운 국물에 메밀면을 말아 먹는 요리" },
  { name: "삼겹살", description: "돼지고기 삼겹살을 구워 쌈과 함께 먹는 요리" },
]

// 양식 메뉴 데이터
const westernFood = [
  { name: "파스타", description: "다양한 소스와 함께 즐기는 이탈리아 면 요리" },
  { name: "피자", description: "토핑을 얹어 구운 이탈리아 빵 요리" },
  { name: "햄버거", description: "패티와 다양한 재료를 빵 사이에 넣은 샌드위치" },
  { name: "스테이크", description: "소고기를 구워 먹는 요리" },
  { name: "샐러드", description: "신선한 채소와 드레싱을 곁들인 요리" },
  { name: "샌드위치", description: "빵 사이에 다양한 재료를 넣은 간편식" },
  { name: "리조또", description: "쌀을 천천히 끓여 만든 이탈리아 요리" },
  { name: "오믈렛", description: "계란을 부쳐 다양한 재료를 넣은 요리" },
  { name: "치킨", description: "닭고기를 튀기거나 구운 요리" },
  { name: "타코", description: "토르티야에 고기와 채소를 넣은 멕시코 요리" },
]

// 중식 메뉴 데이터
const chineseFood = [
  { name: "짜장면", description: "춘장 소스에 면을 비벼 먹는 중국식 요리" },
  { name: "짬뽕", description: "해산물과 채소가 들어간 매운 국물 요리" },
  { name: "탕수육", description: "돼지고기를 튀겨 새콤달콤한 소스를 곁들인 요리" },
  { name: "마파두부", description: "두부와 다진 고기를 매운 소스로 볶은 요리" },
  { name: "양장피", description: "해파리와 채소, 고기를 함께 버무린 냉채 요리" },
  { name: "깐풍기", description: "닭고기를 튀겨 매콤한 소스를 곁들인 요리" },
  { name: "유린기", description: "닭고기를 튀겨 새콤한 소스를 곁들인 요리" },
  { name: "고추잡채", description: "채소와 고기를 볶아 만든 요리" },
  { name: "팔보채", description: "해산물과 채소를 함께 볶은 요리" },
  { name: "양꼬치", description: "양고기를 꼬치에 꿰어 구운 요리" },
]

// 일식 메뉴 데이터
const japaneseFood = [
  { name: "초밥", description: "식초를 섞은 밥 위에 생선이나 해산물을 얹은 요리" },
  { name: "라멘", description: "국물과 면, 다양한 토핑으로 구성된 일본식 면 요리" },
  { name: "돈카츠", description: "돼지고기를 튀겨 소스와 함께 먹는 요리" },
  { name: "우동", description: "두꺼운 밀가루 면을 국물에 말아 먹는 요리" },
  { name: "오니기리", description: "밥을 뭉쳐 속재료를 넣고 김으로 감싼 요리" },
  { name: "덮밥", description: "밥 위에 다양한 재료를 얹은 요리" },
  { name: "오코노미야키", description: "밀가루 반죽에 다양한 재료를 넣어 구운 일본식 부침개" },
  { name: "규동", description: "소고기를 달콤한 간장 소스로 조려 밥 위에 얹은 요리" },
  { name: "가츠동", description: "돈카츠를 달걀과 함께 조려 밥 위에 얹은 요리" },
  { name: "타코야키", description: "문어 조각을 넣어 동그랗게 구운 간식" },
]

export default function LunchRecommender() {
  const [selectedFood, setSelectedFood] = useState<{ name: string; description: string } | null>(null)
  const [cuisine, setCuisine] = useState("korean")

  const getFoodByType = () => {
    switch (cuisine) {
      case "korean":
        return koreanFood
      case "western":
        return westernFood
      case "chinese":
        return chineseFood
      case "japanese":
        return japaneseFood
      default:
        return koreanFood
    }
  }

  const getRandomFood = () => {
    const foods = getFoodByType()
    const randomIndex = Math.floor(Math.random() * foods.length)
    setSelectedFood(foods[randomIndex])
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">오늘의 점심 메뉴 추천</CardTitle>
          <CardDescription>버튼을 클릭하여 점심 메뉴를 추천받으세요</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="korean" className="mb-6" onValueChange={setCuisine}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="korean">한식</TabsTrigger>
              <TabsTrigger value="western">양식</TabsTrigger>
              <TabsTrigger value="chinese">중식</TabsTrigger>
              <TabsTrigger value="japanese">일식</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col items-center justify-center p-6 text-center min-h-[200px] bg-slate-50 rounded-lg">
            {selectedFood ? (
              <>
                <h3 className="text-3xl font-bold mb-4">{selectedFood.name}</h3>
                <p className="text-slate-600">{selectedFood.description}</p>
              </>
            ) : (
              <div className="flex flex-col items-center text-slate-400">
                <Utensils className="h-16 w-16 mb-4" />
                <p>버튼을 클릭하여 메뉴를 추천받으세요</p>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full" size="lg" onClick={getRandomFood}>
            <RefreshCw className="mr-2 h-4 w-4" />
            메뉴 추천받기
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
