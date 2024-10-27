# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        max_height = -1
        res = -1
        def dfs(root, depth):
            nonlocal max_height, res
            if not root:
                return
            if depth > max_height:
                max_height = max(depth, max_height)
                res = root.val
            dfs(root.left, depth + 1)
            dfs(root.right, depth + 1)
        
        dfs(root, 0)
        return res
