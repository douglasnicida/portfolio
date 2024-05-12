import { motion } from "framer-motion";

export const MotionDivToRight = ({children, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivToLeft = ({children, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivToUp = ({children, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivToDown = ({children, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.7 }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivItemsDown = ({children, i, ...props}) => {
    return(
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0}}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivItemsUp = ({children, i, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivItemsLeft = ({children, i, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          {...props}
        >
            {children}
        </motion.div>
    )
}

export const MotionDivItemsRight = ({children, i, ...props}) => {
    return(
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          {...props}
        >
            {children}
        </motion.div>
    )
}