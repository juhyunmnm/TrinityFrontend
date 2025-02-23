/*
import React from "react";

function Read(){
    return 
        <>
        
        <div class="card">
        <div class="card-body">
            <h5 class="card-title" th:text="@{${post.title} + ' - ' + ${post.author}}"></h5>
            <h5 class="card-title">{post.title} + ' - ' +{post.author}</h5>
            
            <p class="card-text">
                <small
                    class="text-muted"
                    th:text="${#temporals.format(post.createdDate, 'yyyy-MM-dd HH:mm')}"
                ></small>
            </p>
            <p class="card-text" th text={"${post.content}"}></p>
        </div>
    </div>
    <div class="row mt-3">
            <div class="col-auto mr-auto"></div>
            <div class="col-auto">
                <a class="btn btn-info" th:href="@{'/post/edit/' + ${post.id}}" role="button">수정</a>
            </div>
            <div class="col-auto">
                <form id="delete-form" th:action="@{'/post/' + ${post.id}}" method="post">
                    <input type="hidden" name="_method" value="delete" />
                    <button id="delete-btn" type="submit" class="btn btn-danger">삭제</button>
                </form>
            </div>
        </div>
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script><script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </>
}

export default Read
*/